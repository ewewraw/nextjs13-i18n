import {FormControl, MenuItem, Select} from "@mui/material";
import useTranslation from "next-translate/useTranslation";


export default function LangSelect() {
    const {t, lang} = useTranslation('common')
    return (
        <FormControl sx={{m: 1, minWidth: 120, alignItems: 'center'}}>
            <Select value={lang}
                    variant={'standard'}
                    disableUnderline={true}
                    sx={{
                        '.MuiInput-input': {
                            backgroundColor: 'transparent!important',
                        },
                    }}
            >
                {['en', 'de', 'ru'].map((value, index) => (
                    <MenuItem key={value}
                              onClick={event => window.location.href = `/?lang=${value}`}
                              value={value}
                              sx={{
                                  backgroundColor: 'transparent!important',
                              }}
                    >
                        {value.toUpperCase()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}