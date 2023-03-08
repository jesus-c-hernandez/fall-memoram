import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.scss'],
})
export class GameModeComponent {
  constructor(private router: Router, private sharingService: SharingService) {}

  goToGame(gamemode: string) {
    this.sharingService.sharingShowLoadingObservableData = true;
    this.router.navigate([gamemode]);
  }
}
