# OpticalWavefronts

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://rdungee.github.io/OpticalWavefronts.jl/stable/)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://rdungee.github.io/OpticalWavefronts.jl/dev/)
[![Build Status](https://github.com/rdungee/OpticalWavefronts.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/rdungee/OpticalWavefronts.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://codecov.io/gh/rdungee/OpticalWavefronts.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/rdungee/OpticalWavefronts.jl)

A framework for simulating optical waves, specifically for tracking the wavefronts themselves.
This means tracking phase, amplitude, and wavelength, with a goal for support full spectral distributions (placeholder for this is a field of type `Function` or `Missing` so that it's optional).
The idea is that optical simulation packages (i.e. propagation, atmospheric turbulence, etc.) can operate on the type(s?) provided here, facilitating the ability for all of them to interact with each other.