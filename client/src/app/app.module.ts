import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

// Services 
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http';
import { WorkoutService } from './services/workout.service'

// Components
import { AppRoutingModule } from './app-routing.module';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WorkoutsComponent,
    NewWorkoutComponent,
    WorkoutDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService, WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
