import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/react-fortawesome";
// import { faArrowRight } from "@fortawesome/free/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc }) => {
    // Implement the UI for the Card componet according to the instructions. 
    // You should be able to implement the component with the elements imported above.
    // Feel Free to import other UI components from Chakara UI if you wish to.
    return (
        <VStack
        color='black'
        backgroundColor='white'
        cursor='pointer'
        borderRadius='xl'
        
        >
            <Image src={imageSrc} borderRadius='xl' />
            <VStack spacing={4} p={4} alignItems='flex-start'>
                <HStack justifyContent='space-between' alignItems='center'>
                    <Heading as='h3' size='md'>{title}</Heading>
                </HStack>
                <Text color='#64748b' as='p'>{description}</Text>
                <HStack>
                    <p>See More</p>
                    <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </HStack>
            </VStack>
        </VStack>
    );
}

export default Card; 