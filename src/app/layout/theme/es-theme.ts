import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const brandPrimary = {
    50: '#eef6ff',
    100: '#d9ebff',
    200: '#b8d9ff',
    300: '#89bdff',
    400: '#5295ff',
    500: '#256fd4',
    600: '#164a9b',
    700: '#123f83',
    800: '#12366d',
    900: '#122f5a',
    950: '#0b1e3d'
};

const EsTheme = definePreset(Aura, {
    primitive: {
        es: brandPrimary
    },
    semantic: {
        primary: brandPrimary,
        colorScheme: {
            light: {
                primary: {
                    color: '{primary.600}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.700}',
                    activeColor: '{primary.800}'
                },
                highlight: {
                    background: '{primary.600}',
                    focusBackground: '{primary.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{primary.400}',
                    contrastColor: '{surface.950}',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}'
                },
                highlight: {
                    background: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                    focusBackground: 'color-mix(in srgb, {primary.300}, transparent 68%)',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            }
        }
    }
});

export default EsTheme;
