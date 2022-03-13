import { Box, Text, Stack } from '@chakra-ui/react';

interface NavSessionProps {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ title, children }: NavSessionProps) {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title}
      </Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  );
}
