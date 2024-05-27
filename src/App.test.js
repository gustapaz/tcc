import axe from 'axe-core';

export async function testAccessibility(container) {
  const results = await axe.run(container);

  if (results.violations.length > 0) {
    console.warn('Accessibility issues found:', results.violations);
  }
}

export default testAccessibility;
