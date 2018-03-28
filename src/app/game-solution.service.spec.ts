import { TestBed, inject } from '@angular/core/testing';

import { GameSolutionService } from './game-solution.service';

describe('GameSolutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameSolutionService]
    });
  });

  it('should be created', inject([GameSolutionService], (service: GameSolutionService) => {
    expect(service).toBeTruthy();
  }));
});
