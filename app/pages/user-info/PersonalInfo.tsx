import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'
import { useAuth } from "../../lib/useAuth"
import React, { useState } from 'react'
import PersonalInfoReadMe from "../../components/PersonalInfoReadMe";
import PersonalInfoEdit from "../../components/PersonalInfoEdit";
import { useRouter } from 'next/router'


export default function PersonalInfo() {
    const { user } = useAuth();

    const router = useRouter();

    if (!user) router.push('/')

    const [readme, setReadme] = useState(true);
    return (
        <Box my={4}>
            {readme ? <PersonalInfoReadMe user={user} setReadme={setReadme} /> : <PersonalInfoEdit user={user} setReadme={setReadme} />}
        </Box>
    )
}

