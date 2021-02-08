while True:
    x_axis = input.acceleration(Dimension.X)
    y_axis = input.acceleration(Dimension.Y)
    z_axis = input.acceleration(Dimension.Z)
    print("X-Axis: " + x_axis + " Y-Axis: " + y_axis + " Z-Axis: " + z_axis)
    print(input.light_level)


    while input.light_level() > 5:
        if x_axis > 3 or y_axis > 3 or z_axis > 3:
            light.set_all(color.rgb(255, 0, 0))
            music.siren.loop()

        