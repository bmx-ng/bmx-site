---
id: random.squares
title: Random.Squares
sidebar_label: Random.Squares
---


The Squares random number generator is based on the paper
“Squares: A Fast Counter-Based RNG” by Bernard Widynski.

Squares is a counter-based pseudo-random number generator that produces high-quality
random values using simple arithmetic operations. Its design emphasizes speed, reproducibility,
and ease of parallel use, as each random value is derived from an internal counter rather than iterative state transitions.

This makes Squares particularly suitable for procedural generation, simulations, and
parallel or multi-threaded workloads. The generator supports deterministic seeding
and integrates fully with the [TRandom](../../random/random.core/trandom) interface.


