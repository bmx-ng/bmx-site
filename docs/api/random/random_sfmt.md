---
id: random.sfmt
title: Random.SFMT
sidebar_label: Introduction
---


The SFMT (SIMD-oriented Fast Mersenne Twister) random number generator is a high-performance variant
of the classic Mersenne Twister algorithm.

SFMT is designed to take advantage of SIMD (Single Instruction, Multiple Data) operations on
modern CPUs, providing significantly improved performance compared to traditional Mersenne Twister
implementations while maintaining excellent statistical properties and a very long period.

This generator is well suited for simulations, numerical applications, and other scenarios
requiring high-quality pseudo-random numbers at high speed. It supports deterministic seeding
and fully implements the [TRandom](../../random/random.core/trandom) interface.


## Types
| Type | Description |
|---|---|
| [TSFMTRandom](../../random/random.sfmt/tsfmtrandom) | An instance of a random number generator. |

