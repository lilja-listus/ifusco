import { Box } from "@material-ui/core"
import React from 'react'
import CreateAbstract from "../new";
import { useFindAbstractByAuthorQuery } from '../../../lib/graphql/findAbstractByAuthor.graphql'
import AbstractReadOnly from "../../../components/AbstractReadOnly";

export default function Abstract() {
    const { data } = useFindAbstractByAuthorQuery();

    return (
        <Box my={4}>
            {data?.abstractsByAuthor?._id ? <AbstractReadOnly abstract={data.abstractsByAuthor} /> : <CreateAbstract />}
        </Box>
    )
}

