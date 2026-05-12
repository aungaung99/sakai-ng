import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `,
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-clock', routerLink: ['/dashboard'] }]
            },
            {
                label: 'Management',
                items: [
                    { label: 'Partner', icon: 'pi pi-fw pi-address-book', routerLink: ['/pages/empty'] },
                    {
                        label: 'Provider',
                        icon: 'pi pi-fw pi-credit-card',
                        path: '/provider',
                        items: [{ label: 'Provider List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/table'] }]
                    }
                ]
            },
            {
                label: 'Transaction',
                items: [
                    {
                        label: 'Logs',
                        icon: 'pi pi-fw pi-list',
                        path: '/logs',
                        items: [{ label: 'Transaction Logs', icon: 'pi pi-fw pi-list-check', routerLink: ['/pages/crud'] }]
                    }
                ]
            },
            {
                label: 'Utilities',
                items: [{ label: 'Web Logs', icon: 'pi pi-fw pi-history', routerLink: ['/documentation'] }]
            }
        ];
    }
}
