// import { loadManifest } from '@angular-architects/module-federation';

// loadManifest('assets/mf.manifest.json')
// 	.catch((err: Error) => console.error('Error loading remote entries', err))
// 	.then(() => import('./bootstrap'))
// 	.catch((err: Error) => console.error(err));

import('./bootstrap')
	.catch(err => console.error(err));
