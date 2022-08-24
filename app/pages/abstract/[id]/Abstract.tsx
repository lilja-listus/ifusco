


import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'
import { useAuth } from "../../../lib/useAuth"
import React, { useState } from 'react'
import CreateAbstract from "../new";

export default function Abstract() {

    // const [readme, setReadme] = useState(true);

    return (
        <Box my={4}>
            <CreateAbstract />
        </Box>
    )
}

