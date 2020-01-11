---
id: ttest
title: TTest
sidebar_label: TTest
---

A test defines a set of test methods to test.


Extend TTest to define your own tests.
<p>
Tag a method with `{before}` and initiliaze any variables/data in that method
</p>
<p>
Tag a method with `{after}` to release any permanent resources you allocated in the setup.
</p>
<p>
For each test method you want to run, tag it with `{test}`
</p>
<p>
Any methods not tagged are ignored by MaxUnit.
</p>


