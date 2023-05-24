module OpticalWavefronts

export Wavefront

struct Wavefront
    coordinates::AbstractVector{AbstractFloat}
    wf::Matrix{Union{Complex,AbstractFloat}}
    wavelength::AbstractFloat
    spectraldistribution::Union{Function,Missing}
    Wavefront(coordinates) = new(coordinates, zeros(Complex, length(coordinates), length(coordinates)), 500e-9, missing)
    Wavefront(coordinates, wf) = new(coordinates, wf, 500e-9, missing)
    Wavefront(coordinates, wf, wavelength) = new(coordinates, wf, wavelength, missing)
end

function Base.size(wf::Wavefront)
    return size(wf.wf)
end

function Base.getindex(wf::Wavefront, I::Vararg{Int,2})
    return wf.wf[I...]
end

function Base.setindex!(wf::Wavefront, value, I::Vararg{Int,2})
    return wf.wf[I...] = value
end

function Base.length(wf::Wavefront)
    return prod(size(wf.wf))
end

end
