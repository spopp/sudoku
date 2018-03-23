import { TestBed, inject } from '@angular/core/testing';

import { GameCreatorService } from './game-creator.service';

describe('GameCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCreatorService]
    });
  });

  it('should be created', inject([GameCreatorService], (service: GameCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
