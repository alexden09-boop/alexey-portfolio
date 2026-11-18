import * as THREE from 'three';

export function createCabinet(furniture, stock) {
  const object = new THREE.Group();
  furniture.position.y = -1.78;
  furniture.scale.setScalar(1.54);
  object.add(furniture);
  // Each carved door has its original hinge pivot in the measured model.
  const doors = [1, 2, 3, 4].map((n) => furniture.getObjectByName('GothicCabinet_01_door' + n));
  for (const [row, floor] of [
    [0, 0.32],
    [1, 1.32],
  ]) {
    for (const side of [-1, 1]) {
      let edge = side * 1.04;
      for (let i = 0; i < 4; i++) {
        const volume = stock[(i + row + (side + 1)) % stock.length].clone(true);
        const size = new THREE.Box3().setFromObject(volume).getSize(new THREE.Vector3());
        const scale = (0.99 + 0.12 * Math.sin(i * 1.8 + side + row)) / size.y;
        const thickness = size.x * scale;
        volume.scale.setScalar(scale);
        volume.position.set(
          edge - (side * thickness) / 2,
          floor * 1.54 - 1.78 + 0.008,
          0.38 + 0.036 * Math.sin(i + row)
        );
        volume.rotation.y = 0.02 * Math.sin(i + side);
        object.add(volume);
        edge -= side * (thickness + 0.012);
      }
    }
    // A second row remains visible through the partly open doors.
    let x = -0.21;
    for (let i = 0; i < 3; i++) {
      const volume = stock[(row + i + 2) % stock.length].clone(true);
      const size = new THREE.Box3().setFromObject(volume).getSize(new THREE.Vector3());
      const scale = (1.04 + 0.11 * Math.cos(i * 0.9 + row)) / size.y;
      const thickness = size.x * scale;
      volume.scale.setScalar(scale);
      volume.position.set(x + thickness / 2, floor * 1.54 - 1.78 + 0.008, 0.22 + 0.035 * Math.cos(i + row));
      object.add(volume);
      x += thickness + 0.012;
    }
  }
  function update(t, paused) {
    for (const [i, door] of doors.entries()) {
      const local = t - [0, 0.11, 0.23, 0.33][i];
      // Ease off the stop, swing wide enough to clear the book, then settle ajar.
      const opening = THREE.MathUtils.smootherstep(local, 0, 1.28);
      const closing = THREE.MathUtils.smootherstep(local, 3.62, 5.28);
      const resting = [0.57, 0.76, 0.42, 0.6][i];
      const swing = 1.59;
      const angle = paused ? resting : opening * (swing - (swing - resting) * closing);
      door.rotation.y = (i % 2 === 0 ? -1 : 1) * angle;
    }
  }
  return { object, update };
}
