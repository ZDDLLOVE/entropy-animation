const sceneDefinitions = [
  { id: 'title', start: 0, end: 8, render: drawTitleScene },
  { id: 'carnot', start: 8, end: 18, render: drawCarnotScene },
  { id: 'clausius1', start: 18, end: 28, render: drawClausiusScene },
  { id: 'kelvin', start: 28, end: 38, render: drawKelvinScene },
  { id: 'entropy', start: 38, end: 48, render: drawEntropyScene },
  { id: 'life', start: 48, end: 60, render: drawLifeScene },
  { id: 'maxwell', start: 60, end: 72, render: drawMaxwellScene },
  { id: 'boltzmann', start: 72, end: 84, render: drawBoltzmannScene },
  { id: 'schrodinger', start: 84, end: 96, render: drawSchrodingerScene },
  { id: 'shannon', start: 96, end: 106, render: drawShannonScene },
  { id: 'landauer', start: 106, end: 116, render: drawLandauerScene },
  { id: 'hawking', start: 116, end: 126, render: drawHawkingScene },
  { id: 'ending', start: 126, end: 140, render: drawEndingScene }
];

class SceneManager {
  getActiveScene(time) {
    for (const scene of sceneDefinitions) {
      if (time >= scene.start && time < scene.end) {
        return scene;
      }
    }
    return sceneDefinitions[0];
  }
}
