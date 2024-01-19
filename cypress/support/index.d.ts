declare global {
  // eslint-disable-next-line
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      visitStory(
        storyName: string,
        options?: Partial<Cypress.VisitOptions>
        // eslint-disable-next-line
      ): Chainable<any>;
    }
  }
}

export {};
