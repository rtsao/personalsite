---
title: "WebGL Sphere: Painting Polyhedral Symmetry Groups"
template: project.jade
collection: projects
slug: polyhedral-symmetry
kicker: Webapp
tags: [JavaScript, WebGL, Mathematica]
image: /img/polyhedra.png
github: https://github.com/rtsao/polyhedral-symmetry
demo: http://rtsao.github.io/polyhedral-symmetry/
---

#### Summary

This app demonstrates the symmetry groups of various polyhedra, more specifically, the Platonic solids: the tetrahedron, cube, octahedron, dodecahedron, and icosahedron. It allows the user to generate paintings on a sphere that share the same rotational and/or mirror symmetries of a given symmetry group.

#### How It Works

The symmetries of a given polyhedron form a group. For example, the set of all rotational symmetries of a tetrahedron is isomorphic to the [alternating group A4](http://en.wikipedia.org/wiki/Alternating_group), the set of even permutations on four objects. Intuitively, the tetrahedron has four vertices.

##### Calculating Matrix Transformations

To make use of these symmetry groups in WebGL, I needed to represent them as a set of 4x4 matrix transformations. For each of the Platonic solids, I used Mathematica to calculate the entire symmetry group as 4x4 matrices. Note that the groups for the cube and octahedron as well as the dodecahedron and icosahedron are the same because they are duals of each other.

##### App Technology

I use [three.js](https://github.com/mrdoob/three.js/) along with custom fragment and vertex shaders to paint the sphere using group averaging. [dat.GUI](https://code.google.com/p/dat-gui/) is also used for the settings menu that allows the user to select the symmetry group among other options. Users can influence the pattern through texture shifting as well as adjustment of color saturation. An output function is provided so users can easily download and save the screen output.

##### Group Averaging

The process for generating the spherical art is essentially as follows:

A source image is mapped to a sphere, providing an initial color source. Each 4x4 transformation in the group is then applied to the sphere, allowing the color at a given point to be averaged across the entire group. The each point on the sphere is then painted with these average colors, resulting in a sphere with a pattern that has the same symmetries as the original polyhedron. This works because by averaging across the group of symmetries, we guarantee that applying any of the group transformations to a point on the sphere will yield a point that has the same color, namely the calculated average.

![Cubic rotational symmetry](/img/cubesymmetryflat.png)

An example color-mapping with cubic/octahedronal rotational symmetry. Notice the points of 2, 3 and 4-fold rotational symmetry.

![Cubic rotational symmetry](/img/cubesymmetry.png)

