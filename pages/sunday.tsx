import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import Schedule, { ISchedule } from "../components/modules/schedules/Schedule"
import { dataSundayScheduleTimes, dataSpecialSchedules } from "../data/dataSchedules"
import { getScheduleDate, getNextSunday, isSameOrAfterToday } from "../shared/utils/date.util"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"

function Sunday() {
  const sundaySchedule: ISchedule = {
    date: getScheduleDate(getNextSunday()),
    times: dataSundayScheduleTimes,
  }
  const schedule = dataSpecialSchedules
    .filter((e) => isSameOrAfterToday(e.date.date))
    .concat(sundaySchedule)
    .sort((a: ISchedule, b: ISchedule) => a.date.date.getTime() - b.date.date.getTime())[0]
  return (
    <>
      <Head>
        <title>Sycamores 4th Ward - Sunday Meetings</title>
      </Head>
      <PageHeader title="Sunday Meetings" subtitle="Below is a list of scheduled events this upcoming Sunday" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <Schedule {...schedule} />
        <PrimaryButton type="link" className="mt-20" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default Sunday
