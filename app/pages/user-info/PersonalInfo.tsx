import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'
import { useAuth } from "../../lib/useAuth"
import React, { useState } from 'react'
import PersonalInfoReadMe from "../../components/PersonalInfoReadMe";
import PersonalInfoEdit from "../../components/PersonalInfoEdit";

export default function PersonalInfo() {
    const { user } = useAuth();
    const [readme, setReadme] = useState(true);
    return (
        <Box my={4}>
            {user &&
                <>  {readme ? <PersonalInfoReadMe user={user} setReadme={setReadme} /> : <PersonalInfoEdit user={user} setReadme={setReadme} />}</>}
        </Box>
    )
}

