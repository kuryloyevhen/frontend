import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatInputModule, MatButtonModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPanelComponent } from './core/components/status-panel/status-panel.component';
import { ResourceComponent } from './shared/components/resource/resource.component';
import { ResourcesComponent } from './core/components/resources/resources.component';
import { WorkToolComponent } from './shared/components/work-tool/work-tool.component';
import { WorkToolsComponent } from './core/components/work-tools/work-tools.component';
import { DwellingComponent } from './shared/components/dwelling/dwelling.component';
import { DwellingsComponent } from './core/components/dwellings/dwellings.component';
import { CardsComponent } from './core/components/cards/cards.component';
import { CivilizationCardsComponent } from './core/components/civilization-cards/civilization-cards.component';
import { CivilizationCardComponent } from './shared/components/civilization-card/civilization-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { LoginDialogComponent } from './core/components/login-dialog/login-dialog.component';
import { GameListComponent } from './core/components/game-list/game-list.component';
import { AgronomyComponent } from './core/components/agronomy/agronomy.component';
import { SmithyComponent } from './core/components/smithy/smithy.component';
import { ReproductionComponent } from './core/components/reproduction/reproduction.component';
import { HumanWorkComponent } from './core/components/human-work/human-work.component';
import { StuffComponent } from './core/components/stuff/stuff.component';
import { RegisterFormComponent } from './core/components/register-form/register-form.component';
import { Interceptor } from './core/services/interceptor';
import { UserStatisticComponent } from './core/components/user-statistic/user-statistic.component';
import { SocketService } from './shared/services/socket.service';
import { ChatComponent } from './core/components/chat/chat.component';
import { GameCreatorService } from './shared/services/game-creator.service';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { StoneageComponent } from './core/components/stoneage/stoneage.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPanelComponent,
    ResourceComponent,
    ResourcesComponent,
    WorkToolComponent,
    WorkToolsComponent,
    DwellingComponent,
    DwellingsComponent,
    CardsComponent,
    CivilizationCardsComponent,
    CivilizationCardComponent,
    LoginDialogComponent,
    GameListComponent,
    AgronomyComponent,
    SmithyComponent,
    ReproductionComponent,
    HumanWorkComponent,
    StuffComponent,
    RegisterFormComponent,
    UserStatisticComponent,
    ChatComponent,
    HomepageComponent,
    StoneageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
     AuthService,
     SocketService,
     GameCreatorService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
   }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
   LoginDialogComponent,
   GameListComponent,
   RegisterFormComponent
]
})
export class AppModule { }
