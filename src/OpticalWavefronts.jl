module OpticalWavefronts

export Wavefront

struct Wavefront
    x::AbstractVector{AbstractFloat}
    wf::Matrix{Union{Complex,AbstractFloat}}
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
