var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = OpticalWavefronts","category":"page"},{"location":"#OpticalWavefronts.jl","page":"Home","title":"OpticalWavefronts.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: GitHub) (Image: Build status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"This page is work in progress documentation for OpticalWavefronts, I appreciate your patience.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For the early stages this is installable through github only:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg; Pkg.add(\"https://github.com/rdungee/OpticalWavefronts.jl.git\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"or alternatively after pressing ] in the repo:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/rdungee/OpticalWavefronts.jl.git","category":"page"},{"location":"#Getting-Started","page":"Home","title":"Getting Started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package contains structs that are going to be used through the JAOST ecosystem, mainly they represent optical wavefronts as arrays of real or complex numbers and the coordinate system underlying that field. At first this will be 2D arrays that are assumed to be on square, regularly spaced grids. Thus the two fields are x, which is the vector or step range that describes the spacing of the pixels in the array along each axis, and wf, which is a matrix of real or complex numbers. If real, then the numbers are taken as the phase delay of that pixel in the optical wavefront, if complex they are taken as the complex amplitude and phase (i.e., the values are meant to be interpreted as Ae^iphi).","category":"page"},{"location":"","page":"Home","title":"Home","text":"Import the code with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using OpticalWavefronts","category":"page"},{"location":"","page":"Home","title":"Home","text":"and then create wavefronts with","category":"page"},{"location":"","page":"Home","title":"Home","text":"wf = Wavefront(x, phs)","category":"page"},{"location":"","page":"Home","title":"Home","text":"x needs to be a subtype of AbstractVector containing floats, and phs needs to be a matrix containing floats or complex numbers. The values in phs can be accessed directly through wf itself, i.e.","category":"page"},{"location":"","page":"Home","title":"Home","text":"wf[1,1] = 1.0-1.0im","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pass","category":"page"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The work included here is covered by the MIT License","category":"page"}]
}
