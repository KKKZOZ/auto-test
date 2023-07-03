<template>
<b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
        <b-row align-v="center">
            <b-col cols="4">
                <h3 class="mb-0">发电功率历史排名</h3>
            </b-col>
            <b-col class="text-right">
                <b-nav class="nav-pills justify-content-end">
                    <b-nav-item class="mr-2 mr-md-0" :active="activeIndex === 12" link-classes="py-2 px-3" @click.prevent="getTableData(12)">
                        <span class="d-none d-md-block">1Year</span>
                        <span class="d-md-none">1Y</span>
                    </b-nav-item>
                    <b-nav-item link-classes="py-2 px-3" :active="activeIndex === 3" @click.prevent="getTableData(3)">
                        <span class="d-none d-md-block">1Quarter</span>
                        <span class="d-md-none">1Q</span>
                    </b-nav-item>
                    <b-nav-item link-classes="py-2 px-3" :active="activeIndex === 1" @click.prevent="getTableData(1)">
                        <span class="d-none d-md-block">1Month</span>
                        <span class="d-md-none">1M</span>
                    </b-nav-item>
                </b-nav>
            </b-col>
        </b-row>
    </template>

    <el-table class="table-responsive table" :data="tableData" header-row-class-name="thead-light">

        <el-table-column type="index" width="80px" label="排名">
        </el-table-column>

        <el-table-column label="风机型号" min-width="115px" prop="turbine_type">
            <template v-slot="{row}">
                <div class="font-weight-600">{{row.turbine_type}}</div>
            </template>
        </el-table-column>

        <el-table-column label="最高发电功率" min-width="110px" prop="max_power" sortable="true">
        </el-table-column>

        <el-table-column label="平均发电功率" min-width="110px" prop="avg_power" sortable="true">
        </el-table-column>

    </el-table>
</b-card>
</template>

<script>
import historyDataApi from '../../api/HistoryData'
import {
    BaseProgress
} from '@/components';
import {
    Table,
    TableColumn,
    DropdownMenu,
    DropdownItem,
    Dropdown
} from 'element-ui'
export default {
    name: 'power-rank-table',
    components: {
        BaseProgress,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn,
        [Dropdown.name]: Dropdown,
        [DropdownItem.name]: DropdownItem,
        [DropdownMenu.name]: DropdownMenu,
    },
    data() {
        return {
            tableData: [],
            activeIndex: 12
        }
    },
    methods: {
        // 获取数据
        getTableData(month) {
            historyDataApi.getPowerRankData(month).then((res) => {
                console.log(res)
                let Data = res.data.data
                this.tableData = Data
                console.log(this.tableData)
            })
            this.activeIndex = month
        }
    },
    mounted() {
        this.getTableData(12)
    }

}
</script>

<style>
  </style>
