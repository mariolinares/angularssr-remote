import { Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DummyComponent
    }
];
