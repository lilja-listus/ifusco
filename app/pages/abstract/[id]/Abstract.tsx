import { Box } from "@material-ui/core";
import React from 'react';
import CreateAbstract from "../new";
import { useFindAbstractByAuthorQuery } from '../../../lib/graphql/findAbstractByAuthor.graphql';
import AbstractReadOnly from "../../../components/AbstractReadOnly";
import { IAbstract } from "../../../../interfaces/IAbstract";

const Abstract: React.FC = (): JSX.Element => {
    const { data } = useFindAbstractByAuthorQuery();

    const existingAbstract: IAbstract = data?.abstractsByAuthor as IAbstract;

    return (
        <Box my={4}>
            {existingAbstract && existingAbstract._id ? <AbstractReadOnly abstract={existingAbstract} /> : <CreateAbstract />}
        </Box>
    );
};

export default Abstract;
