let x_axis: number;
let y_axis: number;
let z_axis: number;
while (true) {
    x_axis = input.acceleration(Dimension.X)
    y_axis = input.acceleration(Dimension.Y)
    z_axis = input.acceleration(Dimension.Z)
    console.log("X-Axis: " + x_axis + " Y-Axis: " + y_axis + " Z-Axis: " + z_axis)
    console.log(input.lightLevel)
    while (input.lightLevel() > 5) {
        if (x_axis > 3 || y_axis > 3 || z_axis > 3) {
            light.setAll(color.rgb(255, 0, 0))
            music.siren.loop()
        }
        
    }
}
