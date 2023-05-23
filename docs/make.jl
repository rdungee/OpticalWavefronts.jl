using OpticalWavefronts
using Documenter

DocMeta.setdocmeta!(OpticalWavefronts, :DocTestSetup, :(using OpticalWavefronts); recursive=true)

include("pages.jl")
makedocs(;
    modules=[OpticalWavefronts],
    authors="Ryan Dungee <ryan.dungee@utoronto.ca> and contributors",
    repo="https://github.com/rdungee/OpticalWavefronts.jl/blob/{commit}{path}#{line}",
    sitename="OpticalWavefronts.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://rdungee.github.io/OpticalWavefronts.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=pages,
)

deploydocs(;
    repo="github.com/rdungee/OpticalWavefronts.jl",
    devbranch="main",
)
