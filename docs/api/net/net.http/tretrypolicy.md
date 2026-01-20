---
id: tretrypolicy
title: TRetryPolicy
sidebar_label: TRetryPolicy
---

Retry policy configuration for HTTP requests.


Defines the parameters for retrying HTTP requests in case of transient failures.


## Fields

### `Field maxAttempts:Int = 0`

Maximum number of attempts for a request. A value of 0 disables retries.

This includes the initial attempt. For example, a value of 3 allows for 2 retries after the first attempt.


<br/>

### `Field backoffFactor:Float = 0.25`

Base backoff factor in seconds for exponential backoff calculation.

The backoff time for each retry is calculated as backoffFactor * (2 ^ (attempt - 1)), capped by maxBackoffSec.


<br/>

### `Field maxBackoffSec:Float = 30.0`

Maximum backoff time in seconds between retries.

This caps the exponential backoff time to avoid excessively long waits.


<br/>

### `Field respectRetryAfter:Int = True`

Whether to respect the Retry-After header from server responses.

If set to True, the client will wait for the duration specified in the Retry-After header before retrying.


<br/>

### `Field allowPostReplay:Int = False`

Whether to allow retries for POST requests if the request body is replayable.

If set to True, POST requests with replayable bodies can be retried according to transient failures.


<br/>

