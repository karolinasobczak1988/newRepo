import { test as base } from '@playwright/test';

type FixtureData = {
  username: string;
  password: string;
};

export const test = base.extend<FixtureData>({
  username: ['standard_user', { scope: 'test' }],
  password: ['secret_sauce', { scope: 'test' }],
});

