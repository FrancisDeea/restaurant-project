'use client'

import { IconMenu } from '@tabler/icons-react';
import { useSidebar } from '@/hooks/useSidebar';

export default function ToggleButton() {
    const { toggleActive } = useSidebar()

    return (
        <button onClick={toggleActive}>
            <IconMenu />
        </button>
    )
}