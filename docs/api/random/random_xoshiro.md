---
id: random.xoshiro
title: Random.Xoshiro
sidebar_label: Random.Xoshiro
---


The Xoshiro family of random number generators is a modern class of fast, high-quality
pseudo-random generators designed as successors to earlier xorshift-based algorithms.

Xoshiro generators are known for their excellent statistical properties, very high performance,
and small internal state. They are widely used in games, simulations, and real-time systems
where both speed and randomness quality are important.

The BlitzMax Xoshiro implementation supports deterministic seeding, conforms to the [TRandom](../../random/random.core/trandom)
interface, and can be used as either the global random generator or via explicit generator instances.


