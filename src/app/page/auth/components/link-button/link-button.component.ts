import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-link-button',
    standalone: true,
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {
    @Input() url: string | undefined;

    constructor(private router: Router) {
    }

    isExternalLink(url: string): boolean {
        return url.startsWith('http://') || url.startsWith('https://');
    }

    navigate() {
        if (this.url) {
            if (this.isExternalLink(this.url)) {
                window.open(this.url, '_blank');
            } else {
                void this.router.navigate([this.url]);
            }
        }
    }
}
