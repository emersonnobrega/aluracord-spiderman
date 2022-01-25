import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

export default function PaginaDoChat() {    
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary["500"],
                    backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1dff05c-7db2-4c17-9e85-9ae503d8432e/de2w360-2ca328ad-0e58-4388-88fa-b3f89e03c0f8.jpg/v1/fill/w_1280,h_720,q_75,strp/spiderman_game_4k_wallpaper_by_bilalnuman_de2w360-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZTFkZmYwNWMtN2RiMi00YzE3LTllODUtOWFlNTAzZDg0MzJlXC9kZTJ3MzYwLTJjYTMyOGFkLTBlNTgtNDM4OC04OGZhLWIzZjg5ZTAzYzBmOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.N0H7RjM8VZv3C6T6Nj6iaGTIMGARWEP1HkQUH0QbBbw")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}
            >
               
            </Box>
        </>
    )
}