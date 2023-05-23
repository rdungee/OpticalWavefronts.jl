```@meta
CurrentModule = OpticalWavefronts
```

# OpticalWavefronts.jl

[![GitHub](https://img.shields.io/badge/Code-GitHub-black.svg)](https://github.com/rdungee/OpticalWavefronts.jl)
[![Build status](https://github.com/rdungee/OpticalWavefronts.jl/workflows/CI/badge.svg?branch=main)](https://github.com/rdungee/OpticalWavefronts.jl/actions)
[![Coverage](http://codecov.io/github/rdungee/OpticalWavefronts.jl/coverage.svg)](http://codecov.io/github/rdungee/OpticalWavefronts.jl)

This page is work in progress documentation for [OpticalWavefronts](https://github.com/rdungee/OpticalWavefronts.jl), I appreciate your patience.

## Installation

For the early stages this is installable through github only:

`using Pkg; Pkg.add("https://github.com/rdungee/OpticalWavefronts.jl.git")`

or alternatively after pressing `]` in the repo:

`pkg> add https://github.com/rdungee/OpticalWavefronts.jl.git`

## Getting Started

This package contains structs that are going to be used through the JAOST ecosystem, mainly they represent optical wavefronts as arrays of real or complex numbers and the coordinate system underlying that field.
At first this will be 2D arrays that are assumed to be on square, regularly spaced grids.
Thus the two fields are `x`, which is the vector or step range that describes the spacing of the pixels in the array along each axis, and `wf`, which is a matrix of real or complex numbers.
If real, then the numbers are taken as the phase delay of that pixel in the optical wavefront, if complex they are taken as the complex amplitude and phase (i.e., the values are meant to be interpreted as ``Ae^{i\\phi}``).

Import the code with

`using OpticalWavefronts`

and then create wavefronts with

`wf = Wavefront(x, phs)`

`x` needs to be a subtype of `AbstractVector` containing floats, and `phs` needs to be a `matrix` containing floats or complex numbers. The values in phs can be accessed directly through `wf` itself, i.e.

`wf[1,1] = 1.0-1.0im`

## Contributing

pass

## License

The work included here is covered by the MIT License