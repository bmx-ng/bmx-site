---
id: random.prvhash
title: Random.PRVHASH
sidebar_label: Random.PRVHASH
---


The PRVHASH random number generator is a small, fast, non-cryptographic pseudo-random number
generator designed for general-purpose use.

PRVHASH focuses on simplicity and speed, making it well suited for games, procedural
content generation, and other applications where performance is important and cryptographic
security is not required. It provides deterministic output when seeded, allowing random sequences to be reproduced reliably.

This generator implements the standard TRandom interface and can be used either as the global
random number generator or through explicitly created instances.


