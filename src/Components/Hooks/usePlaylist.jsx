import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { useState } from "react";
import { Context } from '../context'
const usePlaylist = () => {
    const { data: songs, error } = useContext(Context);
    const [audioList, setStatus] = useState();
    if (songs.length === 0) {
        return <div>....</div>
    }
    console.log(songs)
    const listNow = () => {
        const audiosongs1 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.audio1;
            container.aud_name = song.audio_name1;
            return container;
        }
        )
        const audiosongs2 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.audio2;
            container.aud_name = song.audio_name2;
            return container;
        }
        )
        const audiosongs3 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.audio3;
            container.aud_name = song.audio_name3;
            return container;
        }
        )
        const audiosongs4 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.video1;
            container.aud_name = song.video_name1;
            return container;
        }
        )
        const audiosongs5 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.video2;
            container.aud_name = song.video_name2;
            return container;
        }
        )
        const audiosongs6 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.video3;
            container.aud_name = song.video_name3;

            return container;
        }
        )

        const audioList = [...audiosongs1, ...audiosongs2, ...audiosongs3, ...audiosongs4, ...audiosongs5, ...audiosongs6]
            .filter(e => e.src !== '')

        console.log(audioList)
        return setStatus(audioList)
    }

    //  useMemo(() => { 
    useEffect(() => {
        // useCallback(() => {
        if (songs) {
            listNow();
        }
    }, [songs]);
    return { audioList, error };
}


export default usePlaylist