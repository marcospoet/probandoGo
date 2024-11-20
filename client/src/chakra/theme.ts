import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                background: {
                    subtle: {
                        value: {
                            base:{ value: "{colors.gray.500}" },
                            _dark:{ value: "{colors.gray.800}"},
                        },
                    },
                },
            },
        },
    },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
