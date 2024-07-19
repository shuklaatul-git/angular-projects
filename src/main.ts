import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

function bootstrapAngularApp() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// Check if the Angular app is running standalone or within the ASP.NET Core MVC app
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  if (!document.getElementById('angularAppContainer')) {
    bootstrapAngularApp();
  }
} else {
  document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('angularAppContainer')) {
      bootstrapAngularApp();
    }
  });
}

// Expose the bootstrap function to the global scope for ASP.NET Core MVC integration
(window as any).bootstrapAngularApp = bootstrapAngularApp;
