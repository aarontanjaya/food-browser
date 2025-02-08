import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Wraps built-in 'twMerge' function with custom theme.
 *
 * This is needed because we customized tailwindcss theme
 *
 * @see {@link https://github.com/dcastil/tailwind-merge/blob/v3.0.1/docs/limitations.md}
 * @see {@link https://github.com/dcastil/tailwind-merge/blob/v3.0.1/docs/limitations.md}
 */

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        {
          'green-neon': ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        },
      ],
    },
  },
});

export default twMerge;
