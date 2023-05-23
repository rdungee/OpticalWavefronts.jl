using OpticalWavefronts
using Test

@testset "OpticalWavefronts.jl" begin
    testarr = zeros(Complex, 3, 3)
    testarr[1,1] = 1.0 + 1.0im
    x = Wavefront(-10.0:0.5:10.0, testarr)
    @test size(x) == (3, 3)
    @test x[1,1] == 1.0 + 1.0im
    @test length(x) == 9
    x[1,1] = -1.0 + 1.0im
    @test x[1,1] == -1.0 + 1.0im
end
