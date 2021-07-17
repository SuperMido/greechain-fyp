import React from 'react'
import { Box, Flex, Heading, Image, Text, Spacer, Button, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Tag, } from "@chakra-ui/react"

const user = props => {
    return (
        <>
        <Flex minHeight="100px" width="100%" alignContent="center" align="center" justifyContent='center'>
            <Box width="90%" pt={4} boxShadow='lg' borderBottomRadius={6}>
                <Box p={4} backgroundColor="lavender" borderTopRadius={6} width="100%" textAlign='center'>
                    <Heading as="h4" size="md">Name here</Heading>
                    <Text>Key here</Text>
                </Box>
                <Flex>
                <Box p={4} width="30%" textAlign='center'>
                    <Text color="purple.500">Contact No</Text>
                    <Heading as="h4" size="md">Contact ID here</Heading>
                </Box>
                <Spacer/>
                <Box p={4} backgroundColor="" width="30%" textAlign='center'>
                    <Text color="teal">Role</Text>
                    <Heading as="h4" size="md">Role name</Heading>
                </Box>
                <Spacer/>
                <Box p={4} backgroundColor="" width="30%" textAlign='center'>
                    <Text color="orange">Settings</Text>
                    <Button colorScheme="orange" variant="outline" size="sm">Settings</Button>
                </Box>
                </Flex>
            </Box>
        </Flex>
        <Flex minHeight="100px" width="100%" pt={4} pb={4} alignContent="center" align="center" justifyContent='center'>
            <Box width="90%" pt={4} boxShadow='lg' borderBottomRadius={6}>
                <Box p={4} borderTopRadius={6} width="100%" textAlign='left'>
                    <Heading as="h5" size="sm">BATCHES OVERVIEW</Heading>
                    <br/>
                    <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th>Tag</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td><Tag size="sm" colorScheme="red" borderRadius="full">Error</Tag></Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td><Tag size="sm" colorScheme="green" borderRadius="full">Success</Tag></Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td><Tag size="sm" colorScheme="yellow" borderRadius="full">Warning</Tag></Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td><Tag size="sm" colorScheme="blue" borderRadius="full">Info</Tag></Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th>tag</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                    </Table>
                </Box>
        </Box>
    </Flex>
    </>
    )
}

export default user
