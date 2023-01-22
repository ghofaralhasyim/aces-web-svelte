const months: any = {
    id: {
        short: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        full: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
            '_'
        )
    },
    en: {
        short: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Agt_Sep_Oct_Nov_Dec'.split('_'),
        full: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        )
    }
}

const days: any = {
    id: {
        short: 'Ming_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        full: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_')
    },
    en: {
        short: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        full: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        )
    }
}

const numPrefix = (num:any) => {
    let prefixed = num
    if (num < 10) {
        prefixed = '0' + num
    }

    return prefixed
}

const getMinute = (num:number) => {
    return Math.floor(num / 60)
}

const formatFullDate = (date: string, monthLenght = 'full', lang = 'id') => {
    const parseDate: Date = new Date(date)
    const dates: any = parseDate.getDay()
    const day : any = parseDate.getDate()
    const month : any = parseDate.getMonth()
    const year : any = parseDate.getFullYear()

    const monthName = months[lang][monthLenght][month]
    const dateName = days[lang][monthLenght][dates]

    return `${dateName} , ${numPrefix(day)} ${monthName} ${year}`
}

const Helpers = {
    formatFullDate
}
export default Helpers;