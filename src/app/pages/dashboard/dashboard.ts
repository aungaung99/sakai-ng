import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
        <section class="dashboard-welcome">
            <div class="welcome-card">
                <h1>Welcome to Efficient Soft Payment Gateway</h1>
                <p>All payment provider service can pass from us.</p>
            </div>
        </section>
    `,
    styles: [
        `
            .dashboard-welcome {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
                gap: 1rem;
            }

            .welcome-card {
                max-width: 58rem;
                min-height: 6.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 1.25rem 1.5rem;
                border-radius: 0.75rem;
                background: #295bac;
                color: #ffffff;
            }

            .welcome-card h1 {
                margin: 0 0 0.5rem;
                font-size: clamp(1.25rem, 2vw, 1.65rem);
                line-height: 1.15;
                font-weight: 800;
            }

            .welcome-card p {
                margin: 0;
                font-size: 1rem;
            }
        `
    ]
})
export class Dashboard {}
