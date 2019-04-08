---
id: tcryptopasswordhash
title: TCryptoPasswordHash
sidebar_label: TCryptoPasswordHash
---

Password Hashing


Secret keys used to encrypt or sign confidential data have to be chosen from a very large keyspace.

However, passwords are usually short, human-generated strings, making dictionary attacks practical.

Password hashing functions derive a high-entropy secret key of any size from a password.

The generated key will have the size defined by the application, no matter what the password length is.
* The same password hashed with same parameters will always produce the same output.
* The function deriving a key from a password is CPU intensive, to mitigate brute-force attacks by requiring a significant effort to verify each password.

Common use cases:
* Password storage, or rather: storing what it takes to verify a password without having to store the actual password.
* Deriving a secret key from a password, for example for disk encryption


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

Const OPS_LIMIT:Int = 10000

Local password:String = "Password123"

' generate a master key
Local masterKey:TCryptoPWHashMasterKey = TCryptoPasswordHash.KeyGen()

Print "Master key : " + masterKey.ToString()

Local storedKey:TCryptoPWHashStoredKey

' calculate stored key based on password, master key and parameters
TCryptoPasswordHash.Create(storedKey, password, masterKey, OPS_LIMIT, 0)

Print "Password Hash : " + storedKey.ToString()

' verify the password against the stored key
Verify(storedKey, password, masterKey)

Local wrongPass:String = "password123"

' try to verify the wrong password against the stored key
Verify(storedKey, wrongPass, masterKey)


Function Verify(storedKey:TCryptoPWHashStoredKey, password:String, masterKey:TCryptoPWHashMasterKey)
	If TCryptoPasswordHash.Verify(storedKey, password, masterKey, 50000, 0) Then
		Print "Verified"
	Else
		Print "Invalid"
	End If
End Function
```
## Functions

### `Function KeyGen:TCryptoPWHashMasterKey()`

Generates a key used to encrypt all hashed passwords, along with their parameters.

Hashed passwords and master keys should be stored in different places: hashed passwords are typically
stored in a database, whereas the master key can be statically loaded or hardcoded in the application.

If the database ever gets breached, the list of hashed passwords will be completely useless without the master password.

The storage format supports reencryption and algorithm upgrades.


<br/>

### `Function Deterministic:Int(h:Byte Ptr, hLen:Size_T, password:String, context:String, masterKey:TCryptoPWHashMasterKey, opsLimit:ULong, memLimit:Size_T, threads:Int = 1)`

Derives a deterministic high-entropy key of any length (@hLen bytes) from a <b>password</b>, a <b>context</b>, a master key <b>masterKey</b> and a set of parameters for the hash function.

The resulting key is put into <b>h</b>.
* <b>opslimit</b> is the number of iterations. The higher the number, the slower the function will be, and the more secure the end result will be against brute-force attacks. This should be adjusted according to the hardware, and to application constraints.
* <b>memlimit</b> is the maximum amount of memory to use. The current function use a fixed amount of memory, and ignores this parameter. It can be unconditionally set to 0.
* <b>threads</b> is the number of threads. The current function ignores this parameter. It can be unconditionally set to 1.

This function can be used to derive a key from a password if no other information has been stored. For example, it can be used to
encrypt/decrypt a file using nothing but a password.


<br/>

### `Function Deterministic:Int(h:Byte[], password:String, context:String, masterKey:TCryptoPWHashMasterKey, opsLimit:ULong, memLimit:Size_T, threads:Int = 1)`

Derives a deterministic high-entropy key of any length from a <b>password</b>, a <b>context</b>, a master key <b>masterKey</b> and a set of parameters for the hash function.

The resulting key is put into <b>h</b>.
* <b>opslimit</b> is the number of iterations. The higher the number, the slower the function will be, and the more secure the end result will be against brute-force attacks. This should be adjusted according to the hardware, and to application constraints.
* <b>memlimit</b> is the maximum amount of memory to use. The current function use a fixed amount of memory, and ignores this parameter. It can be unconditionally set to 0.
* <b>threads</b> is the number of threads. The current function ignores this parameter. It can be unconditionally set to 1.

This function can be used to derive a key from a password if no other information has been stored. For example, it can be used to
encrypt/decrypt a file using nothing but a password.


<br/>

### `Function Create:Int(stored:TCryptoPWHashStoredKey Var, password:String, masterKey:TCryptoPWHashMasterKey, opsLimit:ULong, memLimit:Size_T, threads:Int = 1)`

Computes a fixed-length (@CRYPTO_PWHASH_STOREDBYTES bytes), hashed, encrypted, authenticated representative of the <b>password</b>, that can be safely stored in a database.

This representative can be used to later check if a user provided password is likely to be the original one,
without ever storing the password in the database.

The function encrypts and authenticates the representative and the parameters using the master key <b>masterKey</b>. All passwords can safely
be encrypted using the same, long-term master key. Applications can also choose to derive <b>masterKey</b> from a master-master key, and a
unique user identifier.

The representative includes <b>opsLimit</b>, <b>memLimit</b> and <b>threads</b>: these do not have to be stored separately.

Note that the representative is not a string: this is binary data, that must be stored as a blob in a database, or encoded
as a string (for example as a hex value or using a safe base64 variant).


<br/>

### `Function Verify:Int(stored:TCryptoPWHashStoredKey, password:String, masterKey:TCryptoPWHashMasterKey, opsLimitMax:ULong, memLimitMax:Size_T, threadsMax:Int = 1)`

Verifies that the <b>password</b> is valid for the stored representative stored, decrypted using <b>masterKey</b>.

<b>opslimitMax</b>, <b>memlimitMax</b> and <b>threadsMax</b> are maximum values, designed to prevent DoS attacks against applications if the input
is untrusted. They should be set to the maximum values ever used in the [Create](../../../brl/brl.crypto/tcryptopasswordhash/#function-create-intstored-tcryptopwhashstoredkey-var-password-string-masterkey-tcryptopwhashmasterkey-opslimit-ulong-memlimit-size-t-threads-int-1)() function.

If the encoded parameters in the representative exceed these values, the function returns [False](../../../brl/brl.blitz/#false).

If the representative cannot be decrypted, the function returns [False](../../../brl/brl.blitz/#false) without even trying to hash the password.

If the password doesn't appear to be valid for the stored representative, the function returns [False](../../../brl/brl.blitz/#false).
If the password passes all the checks, the function returns [True](../../../brl/brl.blitz/#true).


<br/>

### `Function DeriveStaticKey:Int(staticKey:Byte Ptr, staticKeyLen:Size_T, stored:TCryptoPWHashStoredKey, password:String, context:String, masterKey:TCryptoPWHashMasterKey, opsLimit:ULong, memLimit:Size_T, threads:Int = 1)`

Fills <b>staticKey</b> with <b>staticKeyLen</b> bytes derived from the representative for <b>password</b>.

Verifies that <b>password</b> is valid for the representative. If this is the case, it fills <b>staticKey</b> with <b>staticKeyLen</b> bytes derived
from that representative, and returns [True](../../../brl/brl.blitz/#true).

If the password doesn't appear to be valid for what was stored, the function returns [False](../../../brl/brl.blitz/#false).

This function can be used to derive a deterministic, high-entropy key from a password and user-specific data stored in a database.


<br/>

### `Function DeriveStaticKey:Int(staticKey:Byte[], stored:TCryptoPWHashStoredKey, password:String, context:String, masterKey:TCryptoPWHashMasterKey, opsLimit:ULong, memLimit:Size_T, threads:Int = 1)`

Fills <b>staticKey</b> with bytes derived from the representative for <b>password</b>.

Verifies that <b>password</b> is valid for the representative. If this is the case, it fills <b>staticKey</b> with bytes derived
from that representative, and returns [True](../../../brl/brl.blitz/#true).

If the password doesn't appear to be valid for what was stored, the function returns [False](../../../brl/brl.blitz/#false).

This function can be used to derive a deterministic, high-entropy key from a password and user-specific data stored in a database.


<br/>

### `Function Reencrypt:Int(stored:TCryptoPWHashStoredKey, masterKey:TCryptoPWHashMasterKey, newMasterKey:TCryptoPWHashMasterKey)`

Reencrypts a representative stored using the current master key <b>masterKey</b> and a new master key <b>newMasterKey</b>.

It updates stored in-place and returns [True](../../../brl/brl.blitz/#true) on success. If the representative couldn't be decrypted using <b>masterKey</b>, the function returns [False](../../../brl/brl.blitz/#false).


<br/>

### `Function Upgrade:Int(stored:TCryptoPWHashStoredKey, masterKey:TCryptoPWHashMasterKey, opsLimit:ULong, memLimit:Size_T, threads:Int = 1)`

Upgrades in-place a previously computed representative stored encrypted using the master key <b>masterKey</b>, to the new parameters <b>opslimit</b>, <b>memlimit</b> and <b>threads</b>.

If previously passwords become too fast to verify after a hardware upgrade, stored representatives can be upgraded with new
parameters without requiring the original passwords.

Note that parameters can only be increased. Trying to reduce the value of an existing parameter will not change the original value.


#### Returns
[True](../../../brl/brl.blitz/#true) on success, or [False](../../../brl/brl.blitz/#false) if the data couldn't be decrypted using the provided master password.


<br/>

