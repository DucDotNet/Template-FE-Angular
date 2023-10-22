import { loadManifest } from '@angular-architects/module-federation';

loadManifest('public/configrations/mf.manifest.json')
  .catch((err) =>
    console.error('AppHost: Error loading remote entries : ', err)
  )
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
