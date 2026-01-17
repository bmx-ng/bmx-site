---
id: random.secure
title: Random.Secure
sidebar_label: Random.Secure
---


The Random.Secure module provides a robust and secure way to generate random numbers across each platform.
This module is designed to leverage the underlying cryptographic services of each operating system,
ensuring that the random numbers produced are high-quality.

Because of this, this particular module does not provide a way to seed the random number generator.

## Windows
On Windows, Random.Secure uses the Cryptographic Application Programming Interface (CryptoAPI).

Specifically, it employs the `CryptGenRandom` function, which is part of the Windows Cryptography API: Next Generation (CNG).
This function accesses the system's cryptographic service provider to produce a stream of random bytes.
These bytes are considered cryptographically secure, as they are generated using a random number generator (RNG) that has been seeded
with the current system time, process ID, thread ID, and various other high-entropy sources. The use of `CryptGenRandom` ensures that the
randomness is of high quality and the API takes care of all the complex entropy management and seed generation.

## macOS
For macOS, the Random.Secure module taps into the native Security framework, utilizing the `SecRandomCopyBytes` function.

This function is a part of Apple's security best practices and provides an interface to a cryptographically secure random number generator.

Unlike reading from /dev/random or /dev/urandom, which can be less efficient and direct, `SecRandomCopyBytes` ensures that the random data is
retrieved efficiently and is of high quality. It automatically handles entropy pooling and reseeding, pulling from the same entropy sources
that the OS itself uses for cryptographic operations.

## Linux
On Linux systems, Random.Secure reads directly from the `/dev/urandom` device file.

Unlike `/dev/random`, `/dev/urandom` does not block if there is perceived to be a lack of entropy; instead, it reuses the internal pool
to produce more pseudo-random bits. This makes `/dev/urandom` suitable for high-throughput random number generation without the risk of
stalling the application.

The module manages the file descriptor for `/dev/urandom` efficiently, opening it once and reading from it as needed,
which avoids the overhead of repeatedly opening and closing the file.


