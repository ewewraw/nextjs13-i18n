import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useTranslation from "next-translate/useTranslation";
import {getLocalizedURL} from "../../util/globalFunctions";
import {Divider} from '@mui/material';


export default function NavBar() {
    const {t, lang} = useTranslation('common')

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {t('welcome')}
                    </Typography>
                    <Button color="inherit" href={'/de?lang=de'}>DEU</Button>
                    <Button color="inherit" href={'/en?lang=en'}>ENG</Button>
                    <Divider orientation="vertical" variant="middle" color={'white'} flexItem />
                    <Button color="inherit" href={getLocalizedURL("/", lang)}>
                        {t('home')}</Button>
                    <Button color="inherit" href={getLocalizedURL("/about", lang)}>
                        {t('about')}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}