import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Denilson Sousa</Text>
          <Text color='gray.300' fontSize='small'>
            denilsondssufpi@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Denilson Sousa'
        src='https://github.com/denilsondsousa.png'
      />
    </Flex>
  );
}
